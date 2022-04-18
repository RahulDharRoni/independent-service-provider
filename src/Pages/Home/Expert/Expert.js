import React from 'react';
import Experts from './Experts';

const Expert = () => {
    const expert = [
        { id: 1, name: 'ROLAND QUEMAN As A Diet Planner', descriotion: 'his plan is great for any fitness level as it offers top notch coaching and support as well as complete nutrition coaching (including ongoing macronutrient breakdown and a meal plan).  All of my online coaching packages offer messaging with me through my OVERHAULTRAIN Fitness app, alternative exercises and adjustments as necessary, and consistent support.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfeQA88v06aSgGlGhRcoFI32uFDo7IsDNWXorI_M8DQ&s' },

        { id: 1, name: 'ROLAND QUEMAN As A Fitness Motivator', descriotion: 'Workouts provided will be catered to your schedule and preferred workout location/equipment available (gym/home or both).  This plan includes a 30 minute coaching call (your choice of voice/video) with Gerdy once per month to check-in on progress and adjust training/nutrition as necessary to ensure optimal results from your plan.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvB-fXDaEUrxnoeeLes7Go71z83-gt0ZKR2Y7MI4FoHQ&s' },

        { id: 1, name: 'ROLAND QUEMAN As A Doctor', descriotion: 'An expert, more generally, is a person with extensive knowledge or ability based on research, experience, or occupation and in a particular area of study. Experts are called in for advice on their respective subject, but they do not always agree on the particulars of a field of study.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlssRUKAo6WuLDNTHFZnmf0QLkEsh23sg5dj51bfsfA&s' }
    ]
    return (
        <div>
            <h1 id="Expert" className='text-danger text-center'>ROLAND QUEMAN - Fitness Expert</h1>
            <hr className='w-25 mx-auto' />
            <div className='row my-5'>
                {
                    expert.map(expert => <Experts key={expert.id} expert={expert}></Experts>)
                }
            </div>

        </div>
    );
};

export default Expert;