import React from 'react';
import { Accordion } from '../src';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
const stories = storiesOf('Accordion', module);
stories.add('Sample Accordion', () => {

    const data = [
        { title: 'I am a fresher, can I apply for open positions?', content: '<p>We fulfill most of our fresher requirements from <b>Campus Recruitment</b>. Yet we welcome talented freshers to join our team. Before you decide to apply for non-technical positions like marketing and business analysis make sure you fulfil the criteria of good communication, self-motivation and crave to learn new things.</p>' },
        { title: 'Can I mail my Resume without applying for any mentioned positions?', content: '<p>Absolutely, our recruitment team will get in touch with you if we think you are suited for any of the open positions. Also our candidate database is kept updated to notify you for any future openings.</p>' },
        { title: 'How long does it take to know the final outcome after interview?', content: '<p>Once you are done with all rounds of interview, we try our best to provide final outcome within a week. If you had to wait longer than that, you are advised to reach the recruiter.</p>' },
        { title: 'If I am unsuccessful to clear interview, can I reapply?', content: '<p>Yes, we can evaluate your reason for rejection and reschedule your interview. But, you must reapply only once 6 months are passed after your interview date.</p>' },
    ]

    return <Accordion data={data} />
});
