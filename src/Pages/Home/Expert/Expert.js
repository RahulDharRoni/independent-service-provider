import React from 'react';
import Experts from './Experts';

const Expert = () => {
    const expert = [
        { id: 1, name: 'jonathon', descriotion: 'An expert, more generally, is a person with extensive knowledge or ability based on research, experience, or occupation and in a particular area of study. Experts are called in for advice on their respective subject, but they do not always agree on the particulars of a field of study.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVfeQA88v06aSgGlGhRcoFI32uFDo7IsDNWXorI_M8DQ&s' },
        { id: 1, name: 'jonathon', descriotion: 'An expert, more generally, is a person with extensive knowledge or ability based on research, experience, or occupation and in a particular area of study. Experts are called in for advice on their respective subject, but they do not always agree on the particulars of a field of study.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvB-fXDaEUrxnoeeLes7Go71z83-gt0ZKR2Y7MI4FoHQ&s' },
        { id: 1, name: 'jonathon', descriotion: 'An expert, more generally, is a person with extensive knowledge or ability based on research, experience, or occupation and in a particular area of study. Experts are called in for advice on their respective subject, but they do not always agree on the particulars of a field of study.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlssRUKAo6WuLDNTHFZnmf0QLkEsh23sg5dj51bfsfA&s' }
    ]
    return (
        <div>
            <h1 id="Expert" className='text-primary text-center'>Out Expert</h1>
            <div className='row my-5'>
                {
                    expert.map(expert => <Experts key={expert.id} expert={expert}></Experts>)
                }
            </div>

        </div>
    );
};

export default Expert;