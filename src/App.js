import "bootstrap/dist/css/bootstrap.min.css"
import "./styles/style.css"
import "./App.css"
import React from "react"
import Home from "./component/Home"
import { Route, BrowserRouter as Router } from "react-router-dom"
import Player from "./component/Player"
import Sidebar from "./component/Sidebar"
import Artist from "./component/Artist"
import Album from "./component/Album"
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = { nowPlaying: null }
		this.play = this.play.bind(this)
	}
	play(song) {
		this.setState({ nowPlaying: song })
	}
	render() {
		return (
			<>
				<Sidebar />
				<Router>
					<Route exact path="/" component={Home}></Route>
					<Route path="/Artist/:id" component={Artist}></Route>
					<Route
						path="/Album/:id"
						render={(props) => <Album {...props} play={this.play} />}
					></Route>
				</Router>
				<Player song={this.state.nowPlaying} />
			</>
		)
	}
}
export default App
