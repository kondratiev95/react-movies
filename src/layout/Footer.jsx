import React from 'react';

function Footer() {
    return (
        <footer className="page-footer purple lighten-1">
            <div class="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                </div>
            </div>
        </footer>
    )
}

export { Footer };