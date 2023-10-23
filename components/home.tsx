'use client'

import Board from "@/components/borad";
import PostList from "@/components/postList"

const Home = () => {

    return (
        <div className={'lg:grid lg:grid-cols-3 lg:gap-8 sm:grid-cols-1 sm:gap-0 homeGrid'}>
            <div className={`col-span-1`}>
                <Board/>
            </div>
            <div className={`col-span-2`}>
                <PostList/>
            </div>
        </div>
    )
}

export default Home