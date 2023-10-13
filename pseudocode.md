# PSEUDOCODE:

## SMAC LIST:
1. Understand the problems
2. Break the issues into smalle parts
3. Consider:
    - the components we need
    - atoms, molecules, organisms
    - the overall user journey
    - how to display - render components
    - wireframing
4. Follow the process
5. Sandbox "small tests"

## Project Requirements:
- [ ] use the given API to generate a sample menu
- [ ] create a restaurant with a name, address, & hours listed
- [ ] a single-page web app - serves as a restaurant splash page with a menu
- [ ] use React/JS, Bootstrap, CSS
- [ ] should be more responsive


## Brainstorm/Thoughts:

### The Restaurant:
- Toast! - (where we serve everything but toast...)

### The User Journey:
- "I want to check out the menu for this new restaurant and decide if I want to eat here."

### Immediate Thoughts:
- I want to treat this like a ux/ui project but need to reel it in and focus on functionality first
- Priority is making the data display using axios and the api
- Use buttons for filtering/rendering through the menu items
- Menu would be just below the fold - a cta/anchor tag to jump down

### Questions to Ask While Pseudocoding:
- How will I encourage the user to stay on the page and keep looking through the menu?
- How can I make it clear to the user how to filter through the data?
- What components will I need to build this website?
- How can I further break down the components using 'Atomic Design' into atoms, molecules, and organisms?
- What on my page is going to be staticly rendered vs. dynamic?
- What other add ons/functions could there be to make this a believable site?

### Considering Wireframing
- Keeping it basic!
- Restraining from full-blown design!!! (but also considering an old wireframe project to help)

### MoSCow
[!NOTE] Consider **MSCW** - **M**ust have, **S**hould have, **C**ould have, **W**on't have

#### Must have:
- working axios and rendered data from api!
- menu items to be filtered through in categories
- some way to render the categories and use state
- restaurant name + logo
- address + hours

#### Should have:
- images
- hierarchy
- a type of navigation

#### Could have:
- different pages
- about/contact page

#### Won't have:
- google map
- newsletter form
