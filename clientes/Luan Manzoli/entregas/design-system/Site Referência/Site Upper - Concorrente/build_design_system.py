import bs4

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')

# Create a clean head wrapper
head = soup.find('head')

# Add our custom styles
ds_style = soup.new_tag('style', type='text/css', id='ds-custom-styles')
ds_style.string = """
html { height: auto; }
body {
    background-color: #f5f6fa !important;
    color: #333 !important;
    overflow-y: auto !important;
    font-family: inherit !important;
    margin: 0;
    padding: 0;
    font-size: 16px;
}
.ds-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
}
.ds-header {
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100000;
    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}
.ds-header h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 0;
}
.ds-nav {
    display: flex;
    gap: 20px;
}
.ds-nav a {
    text-decoration: none;
    color: #666;
    font-weight: 600;
    font-size: 14px;
    transition: color 0.2s;
}
.ds-nav a:hover {
    color: #eb5315;
}
.ds-section {
    margin-bottom: 80px;
    background: #fff;
    border-radius: 12px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}
.ds-section-title {
    font-family: "Montserrat", sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #222;
    margin-bottom: 10px;
    padding-bottom: 20px;
    border-bottom: 2px solid #eee;
}
.ds-subtitle {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
}
.ds-grid-colors {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 30px;
}
.ds-color-swatch {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    background: #fff;
}
.ds-color-box {
    height: 120px;
    width: 100%;
}
.ds-color-info {
    padding: 15px;
    border-top: 1px solid #eee;
}
.ds-color-name {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #333;
    margin-bottom: 5px;
}
.ds-color-hex {
    font-family: monospace;
    font-size: 14px;
    color: #777;
}
.ds-showcase-box {
    border: 1px dashed #ccc;
    background: #fafafa;
    border-radius: 8px;
    padding: 40px;
    position: relative;
    margin-bottom: 30px;
    min-height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    gap: 20px;
}
.ds-showcase-box--dark {
    background: #0c0a13;
    border-color: #333;
}
.ds-showcase-box--hero {
    padding: 0;
    border: none;
    height: 940px;
    display: block;
    overflow: hidden;
}
.ds-label {
    position: absolute;
    top: -12px;
    left: 20px;
    background: #eee;
    padding: 4px 10px;
    font-family: monospace;
    font-size: 12px;
    border-radius: 4px;
    color: #555;
    z-index: 9999;
    border: 1px solid #ccc;
}
.ds-showcase-box--dark .ds-label {
    background: #333;
    color: #eee;
    border-color: #555;
    border-radius: 4px;
}

/* OVERRIDES FOR EXTRACTED COMPONENTS to flow normally */
.ds-showcase-box:not(.ds-showcase-box--hero) .gpc-e, 
.ds-showcase-box:not(.ds-showcase-box--hero) .gpc-b,
.ds-showcase-box:not(.ds-showcase-box--hero) fieldset {
    position: relative !important;
    left: auto !important;
    top: auto !important;
    transform: none !important;
    margin: 0 auto;
}
.ds-showcase-box--typography .gpc-e {
    width: 100% !important;
    margin-bottom: 20px;
}
.ds-showcase-box--typography .gpc-e .c {
    width: 100% !important;
    line-height: normal !important;
    text-align: left !important;
}
.ds-showcase-box--typography .gpc-e .c > h2,
.ds-showcase-box--typography .gpc-e .c > p {
    text-align: left !important;
}
.ds-row {
    display: flex;
    gap: 20px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
}
"""
head.append(ds_style)

new_html = bs4.BeautifulSoup("<!DOCTYPE html><html></html>", "html.parser")
html_tag = new_html.find('html')
html_tag.append(head)

body = new_html.new_tag('body', **{'class': 'ds-body preload'})

header = bs4.BeautifulSoup("""
<div class="ds-header">
    <h1>Design System / Pattern Library</h1>
    <div class="ds-nav">
        <a href="#hero">Hero</a>
        <a href="#typography">Typography</a>
        <a href="#colors">Colors</a>
        <a href="#components">Components</a>
        <a href="#motion">Motion</a>
    </div>
</div>
""", "html.parser")
body.append(header)

container = new_html.new_tag('div', **{'class': 'ds-container'})

def get_node(id_str):
    node = soup.find(id=id_str)
    if node:
        return bs4.BeautifulSoup(str(node), "html.parser").find() # copy of the tag
    return None

def change_text(node, text):
    if not node: return
    # Find innermost tags
    for child in node.descendants:
        if isinstance(child, bs4.element.Tag) and child.name == 'span' and len(child.find_all()) == 0:
            child.string = text
            break

# SECTION: Hero
hero_origin = get_node('b_3379135_1_176107554168f7e1555b527873954949')
if hero_origin:
    container.append(bs4.BeautifulSoup(f"""
    <div id="hero" class="ds-section">
        <div class="ds-section-title">1. Hero Section</div>
        <div class="ds-subtitle">Main section clone with fully preserved absolute positioning.</div>
        <div class="ds-showcase-box ds-showcase-box--hero">
            <div id="site" style="min-width: unset; height: 100%; position: relative;">{str(hero_origin)}</div>
        </div>
    </div>
    """, "html.parser"))

# SECTION: Typography
h2_heading = get_node('e_3379135_1_176107554168f7e1555fd1a481425739') # Heading 1 (White)
h2_small = get_node('e_3379135_1_176107554168f7e15560bc2446605710') # Small Subheadline
p_text = get_node('e_3379135_1_176107554168f7e1555b577527080224')

if h2_heading: change_text(h2_heading, "Heading 1 Showcase")
if h2_small: change_text(h2_small, "Secondary Heading")
if p_text: change_text(p_text, "This is the standard paragraph text style using Open Sans.")

container.append(bs4.BeautifulSoup(f"""
<div id="typography" class="ds-section">
    <div class="ds-section-title">2. Typography</div>
    <div class="ds-subtitle">Text styling is bound to specific IDs. We extracted representations for standard layout.</div>
    <div class="ds-showcase-box ds-showcase-box--dark ds-showcase-box--typography">
        <span class="ds-label">On Dark Surface</span>
        {str(h2_heading) if h2_heading else ""}
        {str(h2_small) if h2_small else ""}
        {str(p_text) if p_text else ""}
    </div>
</div>
""", "html.parser"))

# SECTION: Colors
container.append(bs4.BeautifulSoup("""
<div id="colors" class="ds-section">
    <div class="ds-section-title">3. Colors & Surfaces</div>
    <div class="ds-subtitle">The primary color palette and backgrounds.</div>
    <div class="ds-grid-colors">
        <div class="ds-color-swatch"><div class="ds-color-box" style="background:#eb5315;"></div><div class="ds-color-info"><div class="ds-color-name">Primary Orange</div><div class="ds-color-hex">#EB5315</div></div></div>
        <div class="ds-color-swatch"><div class="ds-color-box" style="background:#1565c0;"></div><div class="ds-color-info"><div class="ds-color-name">Hover Blue</div><div class="ds-color-hex">#1565C0</div></div></div>
        <div class="ds-color-swatch"><div class="ds-color-box" style="background:#0c0a13;"></div><div class="ds-color-info"><div class="ds-color-name">Dark Surface</div><div class="ds-color-hex">#0C0A13</div></div></div>
        <div class="ds-color-swatch"><div class="ds-color-box" style="background:#0ba427;"></div><div class="ds-color-info"><div class="ds-color-name">Success Green</div><div class="ds-color-hex">#0BA427</div></div></div>
        <div class="ds-color-swatch"><div class="ds-color-box" style="background:#101010; border:1px solid #2e2e2e;"></div><div class="ds-color-info"><div class="ds-color-name">Card Surface</div><div class="ds-color-hex">#101010</div></div></div>
    </div>
</div>
""", "html.parser"))

# SECTION: Components
btn_primary = get_node('e_3379135_1_176107554168f7e1555fb90163642628')
form_block = get_node('e_3379135_1_63324')

if btn_primary: change_text(btn_primary, "PRIMARY CTA BUTTON")

container.append(bs4.BeautifulSoup(f"""
<div id="components" class="ds-section">
    <div class="ds-section-title">4. UI Components</div>
    <div class="ds-subtitle">Interactive elements decoupled from absolute grids. (Hover over elements to see transitions)</div>
    
    <div class="ds-showcase-box ds-showcase-box--dark ds-showcase-box--components">
        <span class="ds-label">Buttons</span>
        <div class="ds-row">
            {str(btn_primary) if btn_primary else ""}
        </div>
    </div>

    <div class="ds-showcase-box ds-showcase-box--dark ds-showcase-box--components" style="padding-top: 60px;">
        <span class="ds-label">Lead Form</span>
        {str(form_block) if form_block else ""}
    </div>
</div>
""", "html.parser"))

# SECTION: Motion
container.append(bs4.BeautifulSoup("""
<div id="motion" class="ds-section">
    <div class="ds-section-title">5. Motion Gallery</div>
    <div class="ds-subtitle">Loading states and animations natively integrated.</div>
    
    <div class="ds-showcase-box ds-showcase-box--dark">
        <span class="ds-label">se_imagem (.se_key pulse)</span>
        <div class="se_imagem" style="width: 200px; height: 100px; border-radius: 8px;">
            <div class="c" style="width: 100%; height: 100%;"></div>
        </div>
    </div>
</div>
""", "html.parser"))

body.append(container)

# Add any scripts that were in original body end
scripts = soup.find_all('script')
for s in scripts:
    body.append(s)

html_tag.append(body)

with open('design-system.html', 'w', encoding='utf-8') as f:
    f.write("<!DOCTYPE html>\\n")
    f.write(new_html.prettify())

print("design-system.html created successfully.")
