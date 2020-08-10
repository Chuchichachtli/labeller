import React, { Component } from 'react';

class NavigationBar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-warning navbar-nav w-100  "> 
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Labeling Page<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/saved-documents">Saved Documents</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/logout">Log-Out</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;