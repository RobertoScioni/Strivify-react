import React from "react"
import {
	Card,
	Col,
	Container,
	Jumbotron,
	ListGroup,
	ListGroupItem,
	Row,
} from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"

class Album extends React.Component {
	constructor(props) {
		super(props)
		this.state = { album: {} }
	}
	getAlbum = async (id) => {
		try {
			let album = await fetch(
				`https://deezerdevs-deezer.p.rapidapi.com/album/${id}`,
				{
					method: "GET",
					headers: {
						"x-rapidapi-key":
							"b5adde9161msh8a1dcb5f94ec12fp19467bjsn5987880f6b6c",
						"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
					},
				}
			)
			album = await album.json()
			return album
		} catch (error) {
			console.error(error)
		}
	}
	async componentDidMount() {
		let id = this.props.match.params.id
		let album = await this.getAlbum(id)
		this.setState({ album })
		console.log("album", album)
	}
	render() {
		return (
			<>
				<Container>
					<Row>
						<Col md="6">
							<Card>
								<Card.Img variant="top" src={this.state.album.cover_xl} />
							</Card>
						</Col>
						<Col md="6">
							<ListGroup>
								{this.state.album.tracks &&
									Array.from(this.state.album.tracks.data).map((song) => {
										return (
											<ListGroupItem
												key={song.id}
												onClick={() =>
													this.props.play({
														title: song.title,
														img: this.state.album.cover_small,
														duration: song.duration,
													})
												}
											>
												{song.title}
											</ListGroupItem>
										)
									})}
							</ListGroup>
						</Col>
					</Row>
				</Container>
			</>
		)
	}
}

export default withRouter(Album)
