'use client'
import { useState, useEffect } from 'react';
import Container from '../container';
import CardSobreMim from '../cardSobreMim';


export default function Contato() {
    return (
        <Container>
            <CardSobreMim 
            content='Entre em contato'
            title='Entre em contato'
            hasInput={true}
            />

        </Container>
    )
}
