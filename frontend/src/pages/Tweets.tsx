import DefaultLayout from "../layouts/DefaultLayout";
import axios from 'axios';
import * as Sentry from "@sentry/react";

const Tweets = () => {
    const methodDoesNotExist = () => {
        axios.get('/does-not-exist/').catch((error) => {
          Sentry.captureException(error);
        }
        );
      };

    return (
        <div>
            <h1>Tweets</h1>
            <button onClick={() => methodDoesNotExist()}>Break the world</button>
        </div>
    );
}

export default DefaultLayout(Tweets);