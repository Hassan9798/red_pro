"use client";

import React from 'react'
import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import googleMapReact from 'google-map-react';
import { cn } from '@/lib/utils';

export interface GoogleMapProps extends googleMapReact.Props {
    containerClassName: string;
}

const GoogleMap: React.FC<GoogleMapProps> = ({ containerClassName, ...props }) => {
  return (
    <div className={cn(containerClassName)}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            {...props}
          >
            <FaMapMarkerAlt className="text-primary text-4xl"/>
          </GoogleMapReact>
    </div>
  )
}

export default GoogleMap