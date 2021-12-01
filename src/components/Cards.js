import React, { Component } from 'react'
import { ContenedorGlobal, ContainerCards, Card, Img, Body, Title, Text } from '../styled/Cards.elements';


export default class Cards extends Component {

    render() {

        const { name, image, species } = this.props.pokemon;

        return (
            <ContenedorGlobal>
                <ContainerCards>
                    <Card>
                        <Img src={image} />
                        <Body>
                            <Title>{name}</Title>
                            <Text>
                                {species}
                            </Text>
                        </Body>
                    </Card>
                </ContainerCards>
            </ContenedorGlobal>
        )
    }
}
