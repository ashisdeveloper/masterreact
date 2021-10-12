import React from 'react';
import { Card, BlockUI } from '../src';
import { storiesOf } from '@storybook/react';
import 'bootstrap/dist/css/bootstrap.min.css';
const stories = storiesOf('BlockUI', module);
stories.add('BlockUI', () => {
    return <>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur optio provident quis in ipsam illo aliquam esse? Facilis deleniti numquam dignissimos nemo reiciendis quo nisi temporibus labore molestiae praesentium.</p>
        <div className="row">
            <div className="col-md-4">
                <BlockUI message="Processing, please wait..." blocking={true}>
                    <Card>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae maxime odit itaque omnis ut ipsum eveniet. Iusto repudiandae nostrum saepe. Cupiditate eveniet possimus distinctio corrupti autem hic ab quia?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia molestiae maxime odit itaque omnis ut ipsum eveniet. Iusto repudiandae nostrum saepe. Cupiditate eveniet possimus?</p>
                    </Card>
                </BlockUI>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-4"></div>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consectetur optio provident quis in ipsam illo aliquam esse? Facilis deleniti numquam dignissimos nemo reiciendis quo nisi temporibus labore molestiae praesentium.</p>
    </>
});
