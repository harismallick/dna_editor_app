import { useState, useEffect } from "react";

const Sequence = () => {
    const [sequence, setSequence] = useState(() => {
        let storedSeq = localStorage.getItem("openSeq");
        return storedSeq ? storedSeq : "";
    });
    useEffect(() => {
        // console.log(`Sequence edited to: ${sequence}`);
        localStorage.setItem("openSeq", sequence);
    }, [sequence]);

    return (
    <>
        <label htmlFor="sequence">
            <textarea
                id="sequence"
                name="sequence"
                onChange={(e) => setSequence(e.target.value)}
                value={sequence}
                placeholder="Enter nucleotide sequence.."
            />
        </label>
    </>
    );
};

export default Sequence;
