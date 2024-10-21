import {
    Button,
    Link
} from '@nextui-org/react';
import { motion } from 'framer-motion';
import React from 'react';
import URBANityTable from './table/urbanityTable';

const URBANityLab = () => {
    return (
        <div className="p-4 overflow-scroll">
            <div className="mb-4 p-4 border border-foreground-300 rounded-lg bg-foreground-50">
                <h3 className="text-xl font-bold mb-2">Who is the URBANity Lab?</h3>
                <p>
                    The URBANity (URBAN Intelligence & smarT citY) Laboratory is a research team led by Dr. Shaurya Agarwal
                    at the University of Central Florida (UCF). The lab focuses on investigating the future of smart cities and
                    transportation systems. Past research topics cover areas such as LiDAR perception for autonomous mobility, applications of the Koopman
                    operator in intelligent transport systems, and physics-informed deep learning.
                </p>
                <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 my-5">
                    <motion.div whileHover={{ scale: 1.05 }}>
                        <Button color='primary' variant='solid' as={Link} href='https://www.cecs.ucf.edu/sagarwal/'>
                            Learn more about URBANity here!
                        </Button>
                    </motion.div>
                </div>
            </div>

            <URBANityTable/>

        </div>
    );
};

export default URBANityLab;
