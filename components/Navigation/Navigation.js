import Link from "next/link"

export default function Navigation (){
    return(
        <nav>
            <ul>
                <li><Link href="createactivity">Add</Link></li>
                 <li><Link href="/"></Link>Home</li>
                  <li><Link href="bookmark">Bookmark</Link></li>
                 
            </ul>
        </nav>
    )
}