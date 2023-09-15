import { Component } from "react";
import SetTimer from "./components/SetTimer";
import DisplayTimer from "./components/DisplayTimer";
import Controls from "./components/Controls";
import Header from "./components/Header";
import { AppState } from "./types/pomodoro";
import "./App.css";
import Container from "./components/Container";
import Footer from "./components/Footer";

class App extends Component<{}, AppState> {
  private audio: HTMLAudioElement | null;
  private pomodoro: NodeJS.Timeout | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      breakDefault: 5,
      sessionDefault: 25,
      timerMode: "session",
      time: 1500,
      active: false,
      touched: false,
    };
    this.audio = null;
    this.pomodoro = undefined;
  }

  componentDidUpdate(prevProps: {}, prevState: AppState) {
    if (prevState.time === 0 && prevState.timerMode === "session") {
      this.setState({
        time: this.state.breakDefault * 60,
        timerMode: "break",
      });
      if (this.audio) {
        this.audio.play();
      }
    }
    if (prevState.time === 0 && prevState.timerMode === "break") {
      this.setState({
        time: this.state.sessionDefault * 60,
        timerMode: "session",
      });
      if (this.audio) {
        this.audio.play();
      }
    }
  }

  handleSetTimers = (increment: boolean, timerType: keyof AppState) => {
    if (increment && this.state[timerType] === 60) return;
    if (!increment && this.state[timerType] === 1) return;
    let currentValue = this.state[timerType];
    if (typeof currentValue === "number") {
      let newValue: number = currentValue + (increment ? 1 : -1);
      if (timerType === "sessionDefault") {
        this.setState({
          sessionDefault: newValue,
          time: newValue * 60,
        });
      } else {
        this.setState({
          breakDefault: newValue,
        });
      }
    }
  };

  handleResetButton = () => {
    this.setState({
      breakDefault: 5,
      sessionDefault: 25,
      time: 1500,
      timerMode: "session",
      touched: false,
      active: false,
    });
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
    if (this.pomodoro) {
      clearInterval(this.pomodoro);
    }
  };

  handlePlayPauseButton = () => {
    if (this.state.active) {
      if (this.pomodoro) {
        clearInterval(this.pomodoro);
      }
      this.setState({
        active: false,
      });
    } else {
      if (this.state.touched) {
        this.pomodoro = setInterval(
          () => this.setState({ time: this.state.time - 1 }),
          1000
        );
        this.setState({ active: true });
      } else {
        this.setState(
          {
            time: this.state.sessionDefault * 60,
            touched: true,
            active: true,
          },
          () =>
            (this.pomodoro = setInterval(
              () => this.setState({ time: this.state.time - 1 }),
              1000
            ))
        );
      }
    }
  };

  setSecondsToMs = (seconds: number): string => {
    let min: number | string = Math.floor(seconds / 60);
    let sec: number | string = seconds - min * 60;
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    return min + ":" + sec;
  };

  render() {
    return (
      <main
        className="prose max-w-none w-full h-screen"
        style={{
          backgroundImage: `url(/images/pexels-jeshootscom-714701-min.jpg)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container className="flex flex-col items-center justify-center h-full min-h-screen gap-4">
          <article
            id="pomodoro-app"
            className="app-wrapper flex flex-col items-start justify-between w-full px-8 pt-4 pb-6 rounded-xl shadow-xl max-w-md mx-auto bg-glass gap-4 border border-primary"
          >
            <section
              id="header"
              className="w-full flex items-center justify-center"
            >
              <Header />
            </section>
            <section
              id="display"
              className="w-full flex flex-col items-center justify-center gap-6"
            >
              <DisplayTimer
                modeType={this.state.timerMode}
                time={this.setSecondsToMs(this.state.time)}
              />
              <Controls
                active={this.state.active}
                handlePlayPause={this.handlePlayPauseButton}
                handleReset={this.handleResetButton}
              />
            </section>
            <section
              id="timer"
              className="timers-wrapper flex justify-between w-full"
            >
              <SetTimer
                id="break"
                timerType="breakDefault"
                title="Break Length"
                value={this.state.breakDefault}
                handleSetTimers={this.handleSetTimers}
              />
              <SetTimer
                id="session"
                timerType="sessionDefault"
                title="Session Length"
                value={this.state.sessionDefault}
                handleSetTimers={this.handleSetTimers}
              />
            </section>
            <audio
              id="beep"
              src="https://res.cloudinary.com/drpcjt13x/video/upload/v1599590677/Proyectos/Pomodoro%20Clock/bells003_ne9dwp.wav"
              ref={(el) => (this.audio = el)}
            />
          </article>
          <Footer />
        </Container>
      </main>
    );
  }
}

export default App;
