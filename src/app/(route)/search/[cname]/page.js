"use client";
import React from 'react';
import Image from 'next/image'; // Import Image from next/image for optimization
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function DocCategoryList() {
  const params = usePathname();
  const paramsCate = params.split('/')[2] || ""; // Ensure paramsCate has a default value

  const doctors = [
    {
      src: 'https://www.shutterstock.com/image-vector/vector-human-brain-on-white-600nw-1928125664.jpg',
      label: 'Human-Brain'
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_AfQ4FNOvNFGG3zR5aapAVw7LS7wX_5LYQ&s',
      label: 'Heart'
    },
    {
      src: 'https://img.freepik.com/premium-vector/kidney-icon-vector-illustration_665655-11545.jpg',
      label: 'Kidney'
    },
    {
      src: 'https://us.123rf.com/450wm/moodboard/moodboard1304/moodboard130405145/19213570-blue-eye-on-white-background.jpg',
      label: 'Eyes'
    },
    {
      src: 'https://st2.depositphotos.com/2498595/5605/v/950/depositphotos_56057369-stock-illustration-ear-flat-blue-simple-icon.jpg',
      label: 'Ear'
    },
    {
      src: 'https://thumbs.dreamstime.com/b/blue-stomach-silhouette-white-background-blue-flat-silhouette-sign-symbol-stomach-organ-isolated-white-background-153913473.jpg',
      label: 'stomach'
    }
  ];

  return (
    <div className='h-screen mt-5 flex flex-col'>
     Search
    </div>
  );
}

export default DocCategoryList;
