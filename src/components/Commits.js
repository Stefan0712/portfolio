import React, { useEffect, useState } from "react";


const Commits = ({repo}) => {

    const [commits, setCommits] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCommits = async () => {
        try {
            const response = await fetch(
            `https://api.github.com/repos/Stefan0712/${repo}/commits?per_page=3`
            );
            const data = await response.json();
            setCommits(data);
        } catch (error) {
            console.error("Error fetching commits:", error);
        } finally {
            setLoading(false);
        }
        };

        fetchCommits();
    }, [repo]);

    if (loading) return <p>Loading commits...</p>;

    function formatDate(string) {
        const date = new Date(string);
      
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0'); 
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
      
        return (<div className="date"><p>{year}.{month}.{day}</p></div>)
    }
    return ( 
        <div className="commits">
                {commits?.map((commit, index) => (
                <div className="commit" key={index}>
                    <div className="commit-meta">{formatDate(commit.commit.author.date)}</div>
                    <p className="commit-message">{commit.commit.message}</p>
                </div>
                ))}
        </div>
     );
}
 
export default Commits;