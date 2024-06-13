import React, {Component} from "react";
import {useParams} from "react-router-dom";
import './CategoryDetail.css'
import api_sender from "../api_sender";

export default function CategoryDetail(props) {
    let params = useParams()
    return <CategoryDetailClass {...props} params={params}/>
}

class CategoryDetailClass extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    navi = (e, level, id = undefined ) => {
        e.preventDefault()
        this.props.navi(e, level, id)
    }


    render() {
        return (
            <main>
                <h1>Hello, World!</h1>
            </main>
        );
    }
}