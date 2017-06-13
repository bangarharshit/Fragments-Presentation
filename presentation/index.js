// Import React
import React from "react";

// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Appear
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';
import ImageSlide from 'spectacle-image-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
};

preloader(images);

const theme = createTheme({
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Helvetica"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
              <Slide transition={["fade"]} bgColor="primary">
                <Heading size={1} fit caps lineHeight={1} textColor="secondary">
                  Code with Confidence
                </Heading>
                <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                  Harshit Bangar
                </Text>
                <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
                  UBER
                </Text>
              </Slide>
              <Slide transition={["fade"]}>
                <ImageSlide
                    title="Null Pointer Exception"
                    image="assets/npe.jpg"
                />
              </Slide>
              <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>Life of an Android Developer</Heading>
                <List>
                  <Appear><ListItem>NPE</ListItem></Appear>
                  <Appear><ListItem>Memory leak</ListItem></Appear>
                  <Appear><ListItem>Compared Floats for equality</ListItem></Appear>
                  <Appear><ListItem>Hardcoded XML</ListItem></Appear>
                  <Appear><ListItem>Using an API without permissions</ListItem></Appear>
                </List>
              </Slide>
              <Slide transition={["fade"]}>
                <ImageSlide
                    title="Life of an Android Developer"
                    image="assets/android_developer_unhappy_life.png"
                />
              </Slide>
              <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>Tools</Heading>
                <List>
                  <Appear><ListItem>Annotations</ListItem></Appear>
                  <Appear><ListItem>Lint</ListItem></Appear>
                  <Appear><ListItem>Rave</ListItem></Appear>
                </List>
              </Slide>
              <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>Annotations</Heading>
                <List>
                  <Appear><ListItem>Code quality improvements</ListItem></Appear>
                  <Appear><ListItem>IDE warnings</ListItem></Appear>
                  <Appear><ListItem>
                    Build tools
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">Rave</ListItem></Appear>
                      <Appear><ListItem textSize="0.7em">Lint</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                </List>
              </Slide>
              <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>Annotations</Heading>
                <List>
                  <Appear><ListItem>
                    Nullability
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">@NonNull, @Nullable</ListItem></Appear>
                      <Appear><ListItem textSize="0.7em">@ParametersAreNonnullByDefault</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>
                    Resource
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">@IdRes, @XMLRes, @StringRes, @IntRes</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>
                    Thread
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">@MainThread, @WorkerThread</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>
                    Typedef
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">@StringDef, @IntDef</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>
                    Others
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">@IntRange, @RequiresPermission, @CallSuper</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                </List>
              </Slide>
              <CodeSlide
                  transition={["fade"]}
                  lang="js"
                  code={require("raw-loader!../assets/nullability.example")}
                  ranges={[
                      {loc: [0, 24], title: "Nullability Annotations"},
                      {loc: [0, 8]},
                      {loc: [9, 17]},
                      {loc: [18, 23]},
                  ]}/>
              <CodeSlide
                  transition={["fade"]}
                  lang="js"
                  code={require("raw-loader!../assets/package-info.example")}
                  ranges={[
                      {loc: [0, 20], title: "Non Null is the default"},
                      {loc: [0, 3]},
                      {loc: [4, 11]},
                      {loc: [12, 20]},
                  ]}/>

              <Slide transition={["fade"]}>
                <ImageSlide
                    title="The power of Lint"
                    image="assets/lint.png"
                />
              </Slide>
              <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>Lint</Heading>
                <List>
                  <Appear><ListItem>Standard static code analysis tool.</ListItem></Appear>
                  <Appear><ListItem>Can be extended and trained to analyse custom errors.</ListItem></Appear>
                  <Appear><ListItem>Lint warnings and errors can be suppressed.</ListItem></Appear>
                </List>
              </Slide>
              <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>Lint Category</Heading>
                <List>
                  <Appear><ListItem>
                    Correctness
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">Toast - Did you forget to call show?</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>Security
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">App data backup</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>
                    Performance
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">Overdraw</ListItem></Appear>
                      <Appear><ListItem textSize="0.7em">Nested Layouts</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>
                    Usability
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">App is not indexable by google search.</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>
                    Accessability
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">Missing content description on an image.</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>
                    i18N
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">Hardcoded strings in XML.</ListItem></Appear>
                      <Appear><ListItem textSize="0.7em">RTL</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                </List>
              </Slide>
              <Slide transition={["fade"]}>
                <ImageSlide
                    title="The power of custom lints"
                    image="assets/custom_lint.png"
                />
              </Slide>
              <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                <BlockQuote>
                  <Quote>Problem: Don't allow anyone to use enums in our code. Magic constants should be used instead.</Quote>
                  <Appear><Cite>Custom Lint</Cite></Appear>
                </BlockQuote>
              </Slide>
              <CodeSlide
                  transition={["fade"]}
                  lang="js"
                  code={require("raw-loader!../assets/enum-detector-implementation.example")}
                  ranges={[
                      {loc: [0, 7], title: "Implementation"},
                      {loc: [0, 2]},
                      {loc: [3, 7]}
                  ]}/>
              <CodeSlide
                  transition={["fade"]}
                  lang="js"
                  code={require("raw-loader!../assets/enum-detector-issues.example")}
                  ranges={[
                      {loc: [0, 17], title: "Issues"},
                      {loc: [7, 16]},
                      {loc: [0, 6]}
                  ]}/>
              <CodeSlide
                  transition={["fade"]}
                  lang="js"
                  code={require("raw-loader!../assets/enum-detector-lint.example")}
                  ranges={[
                      {loc: [0, 42], title: "Enum detector"},
                      {loc: [0, 2]},
                      {loc: [3, 4]},
                      {loc: [5, 9]},
                      {loc: [10, 14]},
                      {loc: [15, 21]},
                      {loc: [22, 26]},
                      {loc: [27, 28]},
                      {loc: [31, 36]}
                  ]}/>
              <Slide transition={["fade"]}>
                <ImageSlide
                    title="Life of an android developer"
                    image="assets/android_developer_half_happy_life.png"
                />
              </Slide>
              <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
                <BlockQuote>
                  <Quote>We have fixed the models at compile time.</Quote>
                  <Cite>What about runtime?</Cite>
                </BlockQuote>
              </Slide>
              <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>Rave</Heading>
                <List>
                  <Appear><ListItem>Data model validation library by Uber</ListItem></Appear>
                  <Appear><ListItem>
                    Uses annotations
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">TypeDefs, Nullability, Constraints</ListItem></Appear>
                    </List>

                  </ListItem></Appear>
                  <Appear><ListItem>
                    Applications
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">Validating the schema from server.</ListItem></Appear>
                      <Appear><ListItem textSize="0.7em">Avoiding schema errors when stale data is fetched from disk.</ListItem></Appear>
                      <Appear><ListItem textSize="0.7em">Verifying model is valid after mutation.</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                </List>

              </Slide>
              <CodeSlide
                  transition={["fade"]}
                  lang="js"
                  code={require("raw-loader!../assets/validatorfactory.example")}
                  ranges={[
                      {loc: [0, 10], title: "Step 1: Validator Factory"},
                      {loc: [0, 2]},
                      {loc: [2, 7]},
                  ]}/>
              <CodeSlide
                  transition={["fade"]}
                  lang="js"
                  code={require("raw-loader!../assets/samplemodel.example")}
                  ranges={[
                      {loc: [0, 38], title: "Step 2: Annotate the model"},
                      {loc: [0, 2]},
                      {loc: [3, 6]},
                      {loc: [17, 21]},
                      {loc: [11, 14]},
                      {loc: [7, 10]},
                      {loc: [22, 26]},
                      {loc: [27, 31]},
                  ]}/>
              <CodeSlide
                  transition={["fade"]}
                  lang="js"
                  code={require("raw-loader!../assets/validation.example")}
                  ranges={[
                      {loc: [0, 11], title: "Step 3: Start validating"},
                      {loc: [0, 3]},
                      {loc: [3, 11]}
                  ]}/>
              <Slide transition={["fade"]}>
                <ImageSlide
                    title="Life of an android developer"
                    image="assets/android_developer_happy_life.png"
                />
              </Slide>

              <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
                <Heading size={6} textColor="secondary" caps>Summary</Heading>
                <List>
                  <Appear><ListItem>
                    Use lints to improve code quality.
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">Delegate bugs such as NPE and Memory leaks to tools.</ListItem></Appear>
                      <Appear><ListItem textSize="0.7em">Focus on core business logic.</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                  <Appear><ListItem>Use Rave for runtime model validations.</ListItem></Appear>
                  <Appear><ListItem>
                    Learn from errors.
                    <List margin="0 40px 0">
                      <Appear><ListItem textSize="0.7em">Writing a custom lint is one time effort.</ListItem></Appear>
                    </List>
                  </ListItem></Appear>
                </List>
              </Slide>
              <Slide transition={["fade"]} bgColor="primary">
                <Heading size={2} fit caps lineHeight={1} textColor="secondary">
                  Questions?
                </Heading>
              </Slide>
            </Deck>
        );
    }
}
