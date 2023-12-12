"use client";

//import { useUser } from '@clerk/nextjs';
//import { collection, orderBy, query } from "firebase/firestore";
//import React, { useState, useEffect } from 'react';
//import { db } from '@/firebase';
//import { FileType } from '@/typings';
import { Button } from '../ui/button';
import { columns } from './columns';
import { DataTable } from './Table';
import { useCollection } from "react-firebase-hooks/firestore";
import { Skeleton } from '../ui/skeleton';

const TableWrapper = ({ skeletonFiles}) => {

   

    return (
        <div className='flex flex-col space-y-5 pb-10'>
            <Button  variant="outline" className='ml-auto w-fit'>
                Sort By...</Button>

            <DataTable columns={columns} data={skeletonFiles} />

        </div>
    );
};

export default TableWrapper;

