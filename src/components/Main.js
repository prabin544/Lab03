import React from 'react';
import HornedBeasts from './HornedBeasts'
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {

    render() {
        const { data } = this.props;

        return (
            <CardColumns>
                {data.map((animal, index) => {
                    return (
                        <HornedBeasts
                            title={animal.title}
                            description={animal.description}
                            imgUrl={animal.image_url}
                            keyword={animal.keyword}
                            horns={animal.horns}
                            key={index}
                        />
                    );
                })}
            </CardColumns>
        );
    }
}

export default Main;