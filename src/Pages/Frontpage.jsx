import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageSection = ({children}) => {
    return (
        <section  className="h-screen grid place-items-center content-center ">
            {children}
        </section>
    )
}

function FrontPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate");
                } else {
                    entry.target.classList.remove("animate");
                }
            });
        }, {
            threshold: 0.6 // Adjust this value according to when you want the animation to trigger
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                observer.unobserve(section);
            });
        };
    }, []);


    const handleclick = () => {
        navigate('/guessgame');
    }
    return (
        <>
        <PageSection>
            <h1 className="text-6xl">Welcome to the Frontpage</h1>
        </PageSection>

        <PageSection>
            <p className="text-2xl">Press button to play game</p>
            <input className='rounded-lg bg-licorice text-ivory hover:bg-ivory hover:text-licorice' type="button" value="Play Game" onClick={handleclick}/>

        </PageSection>
        </>
    )
}

export default FrontPage


// Schrödinger's feminism:  a woman is simultaneously a victim and empowered, until something happens. Then she chooses which state benefits her the most.