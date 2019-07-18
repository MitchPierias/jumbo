import React from "react";

interface HeaderProps {
    didChangeSearchField: (event:React.ChangeEvent<HTMLInputElement>) => void
}

export const Header:React.FC<HeaderProps> = (props) => (
    <header>
        <svg width="100%" height="193" viewBox="0 0 375 193" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M214.571 115.142C218.405 115.142 221 112.526 221 108.66V66.4823C221 62.6162 218.405 60 214.571 60H161.429C157.595 60 155 62.6162 155 66.4823V119L158.298 115.145V66.4823C158.301 64.7403 159.701 63.3288 161.429 63.3259H214.571C216.299 63.3288 217.699 64.7403 217.702 66.4823V108.66C217.699 110.402 216.299 111.813 214.571 111.816H166.321L163.023 115.142L163.002 115.115" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M171.14 80H172.86V72.7891H175V71H169V72.7891H171.14V80Z" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M181.284 80H183V71H181.284V74.599H178.716V71H177V80H178.716V76.3984H181.284V80Z" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M190 78.1979H186.74V76.3984H189.524V74.599H186.74V72.7995H189.852V71H185V80H190V78.1979Z" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M173.006 86.8922L169.561 83H169V92H170.772V87.0531L173.006 89.4333L175.241 87.0531L175.231 92H177V83H176.451L173.006 86.8922Z" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M183.5 83C177.5 83 177.5 92 183.5 92C189.5 92 189.5 83 183.5 83ZM183.5 90.1935C180.013 90.1935 180.013 84.7965 183.5 84.7965C186.987 84.7965 186.987 90.1935 183.5 90.1935Z" fill="#01D277"/>
            <rect x="198" y="83" width="2" height="9" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M203.738 90.2V88.4H206.524V86.6H203.738V84.8H206.852V83H202V92H207V90.2H203.738Z" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M169 95H171.616C177.461 95 177.461 104 171.616 104H169V95ZM170.756 102.2H171.616C175.03 102.2 175.03 96.8 171.616 96.8H170.756V102.2Z" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M183.102 99.4987C183.647 99.1102 183.88 98.4058 183.902 97.7272C183.94 96.1422 182.979 95 181.438 95H178V104H181.438C182.124 103.995 182.781 103.706 183.261 103.199C183.742 102.691 184.008 102.007 184 101.296C184.003 100.581 183.667 99.9094 183.102 99.4987ZM179.749 96.7948H181.293C181.751 96.8307 182.105 97.2258 182.105 97.7013C182.105 98.1768 181.751 98.5719 181.293 98.6078H179.749V96.7948ZM179.749 102.2H181.293V102.203C181.525 102.205 181.75 102.111 181.914 101.94C182.078 101.769 182.169 101.537 182.166 101.296C182.169 101.056 182.077 100.826 181.913 100.657C181.748 100.489 181.524 100.397 181.293 100.403H179.749V102.2Z" fill="#01D277"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M192.501 87.7578L190.102 83H188L192.297 92H192.706L197 83H194.898L192.501 87.7578Z" fill="#01D277"/>
            <rect x="279" y="30.5513" width="162" height="4" rx="2" transform="rotate(-45 279 30.5513)" fill="#01D277" fillOpacity="0.83"/>
            <rect x="268" y="66.5513" width="162" height="4" rx="2" transform="rotate(-45 268 66.5513)" fill="#01D277" fillOpacity="0.83"/>
            <rect x="241" y="189.551" width="162" height="4" rx="2" transform="rotate(-45 241 189.551)" fill="#01D277" fillOpacity="0.83"/>
            <rect x="-8" y="183.551" width="162" height="4" rx="2" transform="rotate(-45 -8 183.551)" fill="#01D277" fillOpacity="0.83"/>
            <rect x="23" y="48.5513" width="162" height="4" rx="2" transform="rotate(-45 23 48.5513)" fill="#01D277" fillOpacity="0.83"/>
            <rect x="23" y="21.5513" width="162" height="4" rx="2" transform="rotate(-45 23 21.5513)" fill="#01D277" fillOpacity="0.83"/>
        </svg>
        <input className="search" placeholder="Search" onChange={props.didChangeSearchField}/>
    </header>
)