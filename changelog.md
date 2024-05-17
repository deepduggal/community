****# Changelog

# 5/6/24 (Day 1)

Added Editor and firebase authentication and firestore. Successfully logged data.

Added an initial Text as sample data to make collaboratively editable.

Deducing the firestore collections' schema as I go and keeping documentation up-to-date whenever schema is changed.

Will need to make a change for multiple Texts (the documents that can be collaboratively edited).

I'd like to add a way to:
 - *add* and *delete* Texts in the UI
 - *add* and *delete* users from a Text. A realtime list of *activeUsers* field in each Text. Or maybe *cursor positions* for each activeUser
 - *User priveleges*: Maybe *changing the owner* of a document from the person who made it.

# 5/7

Testing realtime firestore for one Text that was manually added. 

Need to make the updating of the document work.

Got it to work and made code more modular!

Adding Markdown support.

# 5/8

Designed app further. Thought about auth, user priveleges, CRUD for multiple texts, routing, remembering cursor positions, and more.

Added Markdown support and MarkdownViewer component.


# 5/9

Started implementing bug fix for cursor moving to end when value changes (which happens after every update)! Remembering cursor position locally.

Added useSelectionStart hook.

# 5/10

Working on auth.

# 5/15

Removed useSelectionStart. Replaced realtime sync with one-time read and on-demand update.

# 5/16

Refactored into hooks and separate code for requests. Made all blogs page that links to a blog post (/blogs/[id]/). 

Need to move the code from home page to the blog post page. 


# **@todo Need to figure out how to pass the blogs data from the all blogs page to the blog post page.**

# ****** Hurry up and ask Lewis, Deep!!!!!!!! ******