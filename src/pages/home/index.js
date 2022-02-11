import { Fragment } from "react";

//components
import {Login} from "../../components/login"

export const Home = () =>{
    return(
        <Fragment>
            <div className="ctr_home">
                <Login/>
            </div>
        </Fragment>
    );
};

