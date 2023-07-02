'use client'
import { useState, useEffect } from 'react';
import Container from '../container';
import CardSobreMim from '../cardSobreMim';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function Contato() {
    return (
        <Container>
            <div className='h-screen w-full items-center flex justify-center'>

                <div className="w-full px-96">
                    <CardSobreMim
                       
                        title='Entre em contato'
                        isAmount={false}
                        hasInput={true}
                    />

                </div>


            </div>

        </Container>
    )
}
