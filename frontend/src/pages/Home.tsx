import DefaultLayout from "../layouts/DefaultLayout";

type HomeProps = { 
    username: string
}

const Home = ({username}: HomeProps) => {
    return (
        <DefaultLayout pageTitle="Home">
            <h1>Welcome to the home page, {username}!</h1>
        </DefaultLayout>
    );
}

export default Home;