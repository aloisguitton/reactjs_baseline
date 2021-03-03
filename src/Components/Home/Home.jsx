import React, {Component} from "react";
import Helmet from "react-helmet";
import Typography from "@material-ui/core/Typography";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <>
            <Helmet>
                <title>WeDrivIt - Location de véhicules anciens</title>
                <meta name="description"
                      content="Location de voitures de collection entre particuliers ou professionnels dans votre région.
                      Partez pour un week-end vintage, votre mariage ou une occasion spéciale."/>
            </Helmet>
            <div className="row">
                <Typography></Typography>
            </div>
        </>
    }
}