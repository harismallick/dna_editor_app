# DNA Sequence Editing Tool

The aim of this project of to create a DNA sequence editor which provides a user with the following features:

- Visualise DNA sequences in the browser.
- Edit existing DNA sequence and create new ones.
- Fetch DNA sequnces from the NCBI database directly into the app for visualisation and editing.
- Add meta data to the sequences, ie, feature annotations. This includes primer sequences, genes, promoters, etc.
- Translate DNA sequences into peptide sequences.

## First feature: Creating a text editor for the DNA sequence.

- First attempt was with the &lt;textarea&gt; HTML tag. But rich text is not supported by textarea.
- So, did a bit of research and found a [video](https://www.youtube.com/watch?v=Z_xN5oo_hqY) showing how to create a rich text editor.
    - The demonstrator in the video mentions using &lt;iframe&gt; tag, to embed a compelely different HTML doc into the existing dom.
    - Need to finish to 3-part video series to figure out its done using vanilla javascript, then recreate it in React.
- Searching for React specific solutions resulted in the [Quill](https://github.com/slab/quill/tree/main)
    - Went through a tree of dependencies to try and figure out how they create a text editor in HTML. No luck yet.