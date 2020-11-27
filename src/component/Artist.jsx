import React from "react"
import { Card, Col, Container, Image, Jumbotron, Row } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"

class Artist extends React.Component {
	constructor(props) {
		super(props)
		this.state = { artist: {} }
	}
	getArtist = async (id, field) => {
		try {
			let artist = await fetch(
				`https://deezerdevs-deezer.p.rapidapi.com/artist/${id}${field}`,
				{
					method: "GET",
					headers: {
						"x-rapidapi-key":
							"b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
						"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					},
				}
			)
			artist = await artist.json()
			return artist
		} catch (error) {
			console.error(error)
		}
	}
	async componentDidMount() {
		let id = this.props.match.params.id
		let artist = await this.getArtist(id, "")
		let albums = await this.getArtist(id, "/albums")
		artist.albums = albums.data
		this.setState({ artist })
		console.log("artist", artist)
	}
	render() {
		return (
			<>
				<Jumbotron className="py-0 align-items-center text-center">
					<h1>{this.state.artist.name}</h1>
					<Image fluid src={this.state.artist.picture_xl} />
				</Jumbotron>
				<Container>
					<Row width="100%">
						{this.state.artist.albums &&
							Array.from(this.state.artist.albums).map((album) => {
								return (
									<Col md={3}>
										<Link to={"/Album/" + album.id}>
											<Card>
												<Card.Img src={album.cover_medium} variant="top" />
												<Card.Header>{album.title}</Card.Header>
											</Card>
										</Link>
									</Col>
								)
							})}
					</Row>
				</Container>
			</>
		)
	}
}

export default withRouter(Artist)
