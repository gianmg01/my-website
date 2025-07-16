import ProjectHeader from '../../components/ProjectHeader';
import Footer from '../../components/Footer';

export default function LSystems() {
  return (
    <>
      <ProjectHeader title="L-System Generation" subtitle="Project Overview" />

      <main>
        <div className="demo-gif">
          <img src="/images/L-Systems.gif" alt="L-System Generator Demo" />
        </div>

        <section>
          <h2>Project Overview</h2>
          <p>
            I developed an OpenGL/C++ program that generates realistic tree models using L-systems. The scene includes a ground mesh, procedurally built hexagonal branches, and flat rhombus leaves. The tree structure is defined by a custom grammar and input file specifying season, recursion depth, starting sentence, and replacement rules.
          </p>
          <p>
            The program parses this grammar to build complex branching patterns recursively, with transformations based on symbols like turns and groupings. Seasonal settings adjust leaf color, presence, and ground textures for winter, spring, summer, or fall. Leaves are added in natural patterns along branches, scaling dynamically for realism.
          </p>
          <p>
            The result is a fully configurable tree generator that visualizes grammar-driven structures in 3D, demonstrating recursive modeling techniques and rule-based procedural generation in OpenGL.
          </p>
        </section>

        <div className="image-placeholder">
          <img src="/images/trees1.PNG" alt="L-System Example Render" />
        </div>

        <section>
          <h2>How It Works</h2>
          <p>
            The generator uses an input file to define the L-system grammar and parameters. This file specifies the desired season, recursion depth, starting sentence, and replacement rule. The season setting changes ground color and leaf appearance to match winter, spring, summer, or fall. The recursion depth controls the complexity of the branching structure by determining how many times the rule replaces the "F" symbol in the sentence.
          </p>
          <p>
            The grammar defines symbols for actions like branching and turning:
          </p>
          <ul>
            <li><strong>F</strong>: create a branch (replaced recursively)</li>
            <li><strong>f</strong>: create a branch (static, no replacement)</li>
            <li><strong>+</strong> / <strong>-</strong>: rotate toward/away from the camera</li>
            <li><strong>#</strong> / <strong>/</strong>: turn left/right</li>
            <li><strong>()</strong>: group child branches</li>
          </ul>
          <p>
            Example rule: <code>F(+F)(-F(F)(/F))(#F(/F)(+F))(F)(/F)</code>
          </p>
          <p>
            After parsing the input, the program builds the final sentence by recursively applying the replacement rule to all "F" symbols. This resulting string encodes the full tree structure. The <code>buildModel</code> method initializes the ground and then calls <code>buildBranch</code> recursively to interpret the sentence.
          </p>
          <p>
            Each branch is represented as a hexagonal prism mesh, scaled down at each level of recursion for a natural tapering effect. Leaves are simple rhombus meshes, placed in an “X” pattern at the ends of branches and scattered randomly along them. The result is a 3D model that visually represents the specified L-system grammar with detailed seasonal variation and hierarchical branching.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
