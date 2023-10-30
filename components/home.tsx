'use client'

import Board from "@/components/borad";
import PostList from "@/components/postList"

const Home = ({isAdmin} : {isAdmin:boolean}) => {

    return (
        <div className={'lg:grid lg:grid-cols-3 lg:gap-8 sm:grid-cols-1 sm:gap-0 homeGrid'}>
            <div className={`col-span-1`}>
                <Board isAdmin={isAdmin}/>
            </div>
            <div className={`col-span-2`}>
                <PostList isAdmin={isAdmin}/>
            </div>
        </div>
    )
}

export default Home