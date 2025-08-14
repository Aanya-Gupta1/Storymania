import { supabase } from './supabase.js'

// Handle comment submission
document.getElementById('comment-form').addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const commentText = document.getElementById('comment-text').value
    const commentName = document.getElementById('comment-name').value
    
    try {
        const { data, error } = await supabase
            .from('comments')
            .insert([
                { 
                    text: commentText, 
                    name: commentName,
                    post_id: 'love-or-confusion',
                    created_at: new Date().toISOString()
                }
            ])

        if (error) {
            console.error('Error submitting comment:', error)
            alert('Error submitting comment: ' + error.message)
            return
        }
        
        document.getElementById('comment-form').reset()
        loadComments()
    } catch (error) {
        console.error('Unexpected error:', error)
        alert('An unexpected error occurred. Please try again.')
    }
})

// Function to load comments
async function loadComments() {
    try {
        const { data: comments, error } = await supabase
            .from('comments')
            .select('*')
            .eq('post_id', 'love-or-confusion')
            .order('created_at', { ascending: false })

        if (error) {
            console.error('Error loading comments:', error)
            return
        }

        const commentsContainer = document.getElementById('comments-container')
        commentsContainer.innerHTML = ''

        if (comments && comments.length > 0) {
            comments.forEach(comment => {
                const commentElement = document.createElement('div')
                commentElement.className = 'comment'
                commentElement.innerHTML = `
                    <strong>${comment.name}</strong>
                    <p>${comment.text}</p>
                    <small>${new Date(comment.created_at).toLocaleString()}</small>
                `
                commentsContainer.appendChild(commentElement)
            })
        } else {
            commentsContainer.innerHTML = '<p>No comments yet. Be the first to comment!</p>'
        }
    } catch (error) {
        console.error('Unexpected error loading comments:', error)
    }
}

// Function to verify table structure
async function verifyTableStructure() {
    try {
        const { data, error } = await supabase
            .from('comments')
            .select('*')
            .limit(1);
            
        if (error) {
            console.error('Error verifying table structure:', error);
            return;
        }
        
        if (data && data.length > 0) {
            const sampleComment = data[0];
            console.log('Table structure verified:', {
                hasText: 'text' in sampleComment,
                hasName: 'name' in sampleComment,
                hasPostId: 'post_id' in sampleComment,
                hasCreatedAt: 'created_at' in sampleComment
            });
        }
    } catch (error) {
        console.error('Error verifying table structure:', error);
    }
}

// Call verifyTableStructure when the page loads
document.addEventListener('DOMContentLoaded', () => {
    verifyTableStructure();
    loadComments();
});