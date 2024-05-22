import { useState, useEffect } from "react";

const Sequence = () => {
    const [sequence, setSequence] = useState("");
    useEffect(() => {
        return console.log(`Sequence edited to: ${sequence}`);
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
