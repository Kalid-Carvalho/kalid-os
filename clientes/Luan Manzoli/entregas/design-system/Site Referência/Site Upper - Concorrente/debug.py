import bs4

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

soup = bs4.BeautifulSoup(html, 'html.parser')

with open('debug_head.html', 'w', encoding='utf-8') as f:
    head = soup.find('head')
    if head:
        f.write(head.prettify())

for style in soup.find_all('style'):
    style.extract()

with open('debug_body_only.html', 'w', encoding='utf-8') as f:
    body = soup.find('body')
    if body:
        f.write(body.prettify())
