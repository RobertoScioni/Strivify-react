import React from "react"
import logo from "../imgs/Spotify_Logo_White.png"

const Sidebar = () => {
	return (
		<nav class="navbar navbar-expand-sm navbar-dark navbar-fixed-left fixed-left">
			<a class="navbar-brand" href="#">
				<img src={logo} width="131" height="40" />
			</a>

			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav d-flex flex-column mt-3">
					<li class="nav-item">
						<a class="nav-link" href="/">
							<svg
								viewBox="0 0 512 512"
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z"
									fill="currentColor"
								></path>
							</svg>
							Home
						</a>
					</li>
					<li class="nav-item">
						<a class="nav-link">
							<svg
								viewBox="0 0 512 512"
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
									fill="currentColor"
									fill-rule="evenodd"
								></path>
							</svg>
							Search
						</a>
					</li>

					<li class="nav-item active">
						<a class="nav-link">
							<svg
								viewBox="0 0 512 512"
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z"
									fill="currentColor"
								></path>
							</svg>
							Your library
						</a>
					</li>
					<span class="profile-nav">
						<li class="nav-item">
							<a class="nav-link bottom" href="#">
								<svg
									width="1em"
									class="mr-2"
									height="1em"
									viewBox="0 0 16 16"
									class="bi bi-arrow-down-circle"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
									/>
									<path
										fill-rule="evenodd"
										d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
									/>
								</svg>
								Install App
							</a>
						</li>
					</span>

					<img
						src="imgs/hero.jpg"
						class="rounded-circle profile-pic"
						width="20"
						height="20"
						alt=""
					/>
					<p class="userName">Roberto Scioni</p>
				</ul>
			</div>
		</nav>
	)
}

export default Sidebar
