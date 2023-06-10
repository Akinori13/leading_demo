import DefaultLayout from "../layouts/DefaultLayout";
import axios from 'axios';
import * as Sentry from "@sentry/react";

const Tweets = () => {
    const methodDoesNotExist = () => {
        axios.get('/').catch((error) => {
          Sentry.captureException(error);
        }
        );
      };

    return (
        <DefaultLayout pageTitle="Tweets">
            <button onClick={() => methodDoesNotExist()}>Break the world</button>
        </DefaultLayout>
    );
}

export default Tweets;