import React from "react"

class Player extends React.Component {
	constructor(props) {
		super(props)
		this.props.song && console.log("song", this.props.song)
	}
	render() {
		return (
			<>
				{/*<!-- START PLAYER -->*/}

				<div
					class="col col-lg-12 d-flex flex-column text-center player-container"
					id="player-container"
				>
					<div class="row text-center mt-3 pb-0 player-controls">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-shuffle mx-2"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"
							/>
							<path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
						</svg>
						<div class="navigation">
							<button id="prev" class="action-btn">
								<svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									class="bi bi-skip-start-fill mx-2"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M4.5 3.5A.5.5 0 0 0 4 4v8a.5.5 0 0 0 1 0V4a.5.5 0 0 0-.5-.5z"
									/>
									<path d="M4.903 8.697l6.364 3.692c.54.313 1.232-.066 1.232-.697V4.308c0-.63-.692-1.01-1.232-.696L4.903 7.304a.802.802 0 0 0 0 1.393z" />
								</svg>
							</button>

							<button id="play" class="action-btn action-btn-big">
								<i
									class="far fa-play-circle"
									style={{ fontSize: "30px", marginTop: "-5px", width: "30px" }}
								></i>
							</button>
							<button id="next" class="action-btn">
								<svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									class="bi bi-skip-end-fill mx-2"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M12 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"
									/>
									<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
								</svg>
							</button>
						</div>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-arrow-repeat mx-2"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
							<path
								fill-rule="evenodd"
								d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
							/>
						</svg>
					</div>
					<div class="row pt-2 position-relative slider mb-3 d-flex">
						<div class="progress-container" id="progress-container">
							<div class="progress" id="progress"></div>
							<div>
								{this.props.song &&
									Math.floor(this.props.song.duration / 600) +
										":" +
										Math.floor(this.props.song.duration / 60) +
										":" +
										(this.props.song.duration % 60)}
							</div>
						</div>
					</div>

					<div class="col-sm-12 col-lg-2 third-col-player mr-2">
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-list-ul mx-2"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
							/>
						</svg>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-pip mx-2"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"
							/>
							<path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z" />
						</svg>
						<svg
							width="1em"
							height="1em"
							viewBox="0 0 16 16"
							class="bi bi-volume-up mx-2"
							fill="currentColor"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zM6 5.04L4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96V5.04z"
							/>
							<path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z" />
							<path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z" />
							<path d="M8.707 11.182A4.486 4.486 0 0 0 10.025 8a4.486 4.486 0 0 0-1.318-3.182L8 5.525A3.489 3.489 0 0 1 9.025 8 3.49 3.49 0 0 1 8 10.475l.707.707z" />
						</svg>
						<form>
							<div class="form-group">
								<label for="formControlRange" class="volumecolor"></label>
								<input
									type="range"
									class="form-control-range"
									id="formControlRange"
								/>
							</div>
						</form>
					</div>

					<div class="row">
						<div class="col-sm-12 col-lg-3 ml-3 d-flex singer-player">
							<div class="img-container">
								<img src={this.props.song && this.props.song.img} id="cover" />
							</div>
							<div class="title" style={{ color: "#fff" }}>
								<h4 class="my-0 mx-3 p-0" id="title">
									{this.props.song && this.props.song.title}
								</h4>
							</div>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								class="bi bi-heart mt-2 mr-3"
								style={{ color: "rgb(206, 206, 206)" }}
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
								/>
							</svg>
						</div>
					</div>

					<audio src="music/Point of Authority.mp3" id="audio-player"></audio>
				</div>
				{/*<!-- End PLAYER -->*/}
			</>
		)
	}
}

export default Player
