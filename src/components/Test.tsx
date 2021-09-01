import axios from 'axios';
import { FC, useState, useEffect, useContext } from 'react';
import { Button } from '@material-ui/core';
import { Msg } from '../App';

interface TestServerResponse {
    message: string
}

// function callApi(setter: (msg: string) => void) {
//     axios.get<TestServerResponse>("http://127.0.0.1:8080/hello")
//         .then(response => {
//             console.log("message: ", response.data.message);
//             setter(response.data.message);
//         })
// }

const MyButton: FC = () => {
    const setMsg = useContext(Msg);

    const callApi = () => {
        axios.get<TestServerResponse>("http://127.0.0.1:8080/hello")
            .then(response => {
                console.log("message: ", response.data.message);
                setMsg(response.data.message);
            })
    }

    return (
        <div className="test">
            <Button onClick={callApi}>
                Click Me
            </Button>
        </div>
    )
}

export default MyButton;