import { writable } from 'svelte/store';
import {selectedSkills} from '$lib/stores/selectedSkills';

class Entry {
    constructor(title, titleLink, subtitle, text, date1, date2, bullets, search, keywords){
        this.title = title;
        this.titleLink = titleLink;
        this.subtitle = subtitle;
        this.text = text;
        this.date1 = new Date(date1);
        this.bullets = bullets;
        this.search = search;
        this.active = true;
        this.memo = new Map();
        this.keywords = keywords;

        // handle date2
        if(date2){
            this.date2 = new Date(date2)            
        } else {
            this.date2 = null;
        }
    }
    
    // Checks if the text or bullets of the entry contain any of the tokens. Tokens is an array of strings
    updateactive(tokens) {
        if (!this.search){
            return
        }
        
        if (tokens.size == 0){
            this.active = true;
            return;
        }
        
        //let unchecked = tokens;
        let unchecked = new Set();

        // first check memo
        for (const s of [...tokens]){
            if(this.memo.has(s)){
                if(this.memo.get(s)){
                    this.active = true;
                    return;
                }               
            } else {
                // If memo does not have token add it to list of values to check for
                unchecked.add(s);
            }
        }

        if (unchecked.size == 0) {
            // All tokens have previously been checked and are false
            this.active = false;
            return;
        }

        // Check for remainingg tokens
        
        for (const s of [...unchecked]){            
            let re = new RegExp(s, "i");
            // Test if text contains token'
            if(re.test(this.text)){
                this.active = true;
                this.memo.set(s, true);
                return;
            }

            // Check bullets for tokens
            this.bullets.forEach(b => {
                if(re.test(b)){
                    this.active = true;
                    this.memo.set(s, true);
                    return;
                }
            })

            // Check keywords
            if(this.keywords){
                this.keywords.forEach(k => {
                    if(re.test(k)){
                        this.active = true;
                        this.memo.set(s, true);
                        return;
                    }
                })
            }
            // text, bullets, keywords did not contain the token
            this.memo.set(s, false);
        }
        
        // Failed to find a match on any tokens
        this.active = false;
    }
}

// Create entry objects and adds them to object
function parseJSONResume(jsonResume){
    jsonResume.entries = {};
    if(jsonResume.work){
        let workEntries = [];
        jsonResume.work.forEach(item => {
            workEntries.push(new Entry(item.name, item.url, item.position, item.summary, item.startDate, item.endDate, item.highlights, true, null))
        });
        jsonResume.entries.work = workEntries;
    }
    if(jsonResume.education){
        let entries = [];
        jsonResume.education.forEach(item => {
            entries.push(new Entry(item.institution, item.url, item.studyType + ' ' + item.area, 'GPA ' + item.score, item.startDate, item.endDate, item.courses, false, null))
        });
        jsonResume.entries.education = entries;
    }
    if(jsonResume.projects){
        let entries = [];
        jsonResume.projects.forEach(item => {
            entries.push(new Entry(item.name, item.url, item.roles, item.description, item.startDate, item.endDate, item.highlights, true, item.keywords))
        });
        jsonResume.entries.projects = entries;
    }
    return jsonResume;
}

// Create empty object store
const resStore = writable({});

// Subscribe to selected skills set so that when they change, active sections of resume is updated
selectedSkills.subscribe(tokens => {
    resStore.update(res => {
        if(res.entries){
            for (const category in res.entries) {
                res.entries[category].forEach(entry => {
                    entry.updateactive(tokens);
                })
            }
        }
        return res;
    })
})

export const resumeInfo = {
    subscribe: resStore.subscribe,
    initialize: (obj) => resStore.set(parseJSONResume(obj))
};

/* function getResume() {    
    const { subscribe, set, update } = writable({});

    function updateactive(tokens) {
        update(res => {
            if(res.entries){
                for (const category in res.entries) {
                    res.entries[category].forEach(entry => {
                        entry.updateactive(tokens);
                    })
                }
            }
            return res;
        })
    }

	return {
		subscribe,
        initialize: (obj) => set(parseJSONResume(obj)),
		update,
        updateactive
	};
} */
