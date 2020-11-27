import React from "react"
import { Card, Container, Row, Col, ListGroup } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"
class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			codes: {
				METAL: "464",
				ROCK: "152",
				ELETTRO: "106",
				JAZZ: "129",
			},
			activeCode: "464",
			artists: [],
		}
	}

	/**
	 *
	 * @param {*} category the category tofetch
	 */

	fetchArtistsByCategory = async () => {
		try {
			let artists = await fetch(
				`https://deezerdevs-deezer.p.rapidapi.com/genre/${this.state.activeCode}/artists`,
				{
					method: "GET",
					headers: {
						"x-rapidapi-key":
							"e75d8629a2mshe74bcadd1131095p185f53jsn7e5fafda57bb",
						"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					},
				}
			)
			artists = await artists.json()
			artists = await artists.data
			//console.log("artists", artists)
			return artists
		} catch (err) {
			console.error(err)
		}
	}
	switchGenre = (event) => {
		//console.log("calling code", this.state)
		let activeCode = this.state.codes[event.target.innerText]
		console.log("code", activeCode)
		this.setState({ activeCode })
		this.setState({ artists: "reload" })
	}
	async componentDidMount() {
		let artists = await this.fetchArtistsByCategory()
		this.setState({ artists })
	}
	async componentDidUpdate() {
		console.log("artists", this.state.artists, "code", this.state.activeCode)

		if (this.state.artists === "reload") {
			let artists = await this.fetchArtistsByCategory()
			this.setState({ artists })
		}
	}

	render() {
		return (
			<>
				<div class="color-change-5x">
					<div class="container-fluid" id="mainBody">
						{/*<!--NAVBAR FOR BODY-->*/}

						<div class="container-fluid">
							<div
								class="row mt-4 align-items-center justify-content-center mb-5"
								id="mainNav"
							>
								<div
									class="list-group list-group-horizontal"
									id="list-tab"
									role="tablist"
								>
									{Object.keys(this.state.codes).map((genre) => {
										return (
											<ListGroup.Item
												key={genre}
												action
												variant="dark"
												active={
													this.state.codes[genre] === this.state.activeCode
												}
												onClick={this.switchGenre}
											>
												{genre}
											</ListGroup.Item>
										)
									})}
								</div>
							</div>

							{/*<!--BODY CONTENT-->*/}
							<Container>
								<Row>
									{this.state.artists && //render the artist only if they are ready
										Array.from(this.state.artists).map((artist) => {
											return (
												<Col md={4}>
													<Link to={"/artist/" + artist.id}>
														<Card>
															<Card.Img
																variant="top"
																src={artist.picture_medium}
															/>
															<Card.Header>{artist.name}</Card.Header>
														</Card>
													</Link>
												</Col>
											)
										})}
								</Row>
							</Container>

							{/*<!--TESTING COMMENT-->*/}

							<div class="row">
								<div class="tab-content" id="nav-tabContent"></div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default withRouter(Home)
