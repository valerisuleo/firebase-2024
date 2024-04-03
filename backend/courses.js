const coursesData = [
    {
        titles: {
            description: 'Serverless Angular with Firebase Course',
            longDescription: 'Serveless Angular with Firestore, Firebase Storage & Hosting, Firebase Cloud Functions & AngularFire'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/serverless-angular-small.png',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 0,
        url: 'serverless-angular'
    },

    {
        titles: {
            description: 'Angular Core Deep Dive',
            longDescription: 'A detailed walk-through of the most important part of Angular - the Core and Common modules'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        lessonsCount: 10,
        categories: ['BEGINNER'],
        seqNo: 2,
        url: 'angular-core-course'
    },

    {
        titles: {
            description: 'RxJs In Practice Course',
            longDescription: 'Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 3,
        url: 'rxjs-course'
    },

    {
        titles: {
            description: 'NgRx In Depth',
            longDescription: 'Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        categories: ['BEGINNER', 'INTERMEDIATE'],
        lessonsCount: 10,
        seqNo: 4,
        url: 'ngrx-course'
    },

    {
        titles: {
            description: 'Angular for Beginners',
            longDescription: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular'
        },
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png',
        categories: ['BEGINNER'],
        lessonsCount: 10,
        seqNo: 5,
        url: 'angular-for-beginners'
    },

    {
        titles: {
            description: 'Angular Security Course - Web Security Fundamentals',
            longDescription: 'Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/security-cover-small-v2.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/lock-v2.png',
        categories: ['ADVANCED'],
        lessonsCount: 11,
        seqNo: 6,
        url: 'angular-security-course'
    },

    {
        titles: {
            description: 'Angular PWA - Progressive Web Apps Course',
            longDescription: 'Learn Angular Progressive Web Applications, build the future of the Web Today.'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-pwa-course.png',
        courseListIcon: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/alien.png',
        categories: ['ADVANCED'],
        lessonsCount: 8,
        seqNo: 7,
        url: 'angular-pwa-course'
    },

    {
        titles: {
            description: 'Angular Advanced Library Laboratory: Build Your Own Library',
            longDescription: 'Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm'
        },
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/advanced_angular-small-v3.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular-advanced-lesson-icon.png',
        categories: ['INTERMEDIATE', 'ADVANCED'],
        seqNo: 8,
        url: 'angular-advanced-course'
    },

    {
        titles: {
            description: 'The Complete Typescript Course',
            longDescription: 'Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.'
        },
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-small.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/thumbnails/typescript-2-lesson.png',
        categories: ['BEGINNER'],
        seqNo: 9,
        url: 'typescript-course'
    },

    {
        titles: {
            description: 'Rxjs and Reactive Patterns Angular Architecture Course',
            longDescription: 'Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-academy/blog/images/rxjs-reactive-patterns-small.png',
        courseListIcon: 'https://angular-academy.s3.amazonaws.com/course-logos/observables_rxjs.png',
        categories: ['BEGINNER'],
        seqNo: 10,
        url: 'rxjs-patterns-course'
    },

    {
        titles: {
            description: 'Angular Material Course',
            longDescription: 'Build Applications with the official Angular Widget Library'
        },
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/material_design.png',
        categories: ['BEGINNER'],
        seqNo: 11,
        url: 'angular-material-course'
    }
]

const lessonsData = [
    {
        id: 1,
        'description': 'Angular Tutorial For Beginners - Build Your First App - Hello World Step By Step',
        duration: '4:17',
        seqNo: 1,
        courseId: 5
    },
    {
        id: 2,
        'description': 'Building Your First  Component - Component Composition',
        duration: '2:07',
        seqNo: 2,
        courseId: 5
    },
    {
        id: 3,
        'description': 'Component @Input - How To Pass Input Data To an  Component',
        duration: '2:33',
        seqNo: 3,
        courseId: 5
    },
    {
        id: 4,
        'description': ' Component Events - Using @Output to create custom events',
        duration: '4:44',
        seqNo: 4,
        courseId: 5
    },
    {
        id: 5,
        'description': ' Component Templates - Inline Vs External',
        duration: '2:55',
        seqNo: 5,
        courseId: 5
    },
    {
        id: 6,
        'description': 'Styling  Components - Learn About Component Style Isolation',
        duration: '3:27',
        seqNo: 6,
        courseId: 5
    },
    {
        id: 7,
        'description': ' Component Interaction - Extended Components Example',
        duration: '9:22',
        seqNo: 7,
        courseId: 5
    },
    {
        id: 8,
        'description': ' Components Tutorial For Beginners - Components Exercise !',
        duration: '1:26',
        seqNo: 8,
        courseId: 5
    },
    {
        id: 9,
        'description': ' Components Tutorial For Beginners - Components Exercise Solution Inside',
        duration: '2:08',
        seqNo: 9,
        courseId: 5
    },
    {
        id: 10,
        'description': ' Directives - Inputs, Output Event Emitters and How To Export Template References',
        duration: '4:01',
        seqNo: 10,
        courseId: 5
    },


    // Security Course
    {
        id: 11,
        'description': 'Course Helicopter View',
        duration: '08:19',
        seqNo: 1,
        courseId: 6
    },

    {
        id: 12,
        'description': 'Installing Git, Node, NPM and Choosing an IDE',
        duration: '04:17',
        seqNo: 2,
        courseId: 6
    },

    {
        id: 13,
        'description': 'Installing The Lessons Code - Learn Why Its Essential To Use NPM 5',
        duration: '06:05',
        seqNo: 3,
        courseId: 6
    },

    {
        id: 14,
        'description': 'How To Run Node In TypeScript With Hot Reloading',
        duration: '03:57',
        seqNo: 4,
        courseId: 6
    },

    {
        id: 15,
        'description': 'Guided Tour Of The Sample Application',
        duration: '06:00',
        seqNo: 5,
        courseId: 6
    },
    {
        id: 16,
        'description': 'Client Side Authentication Service - API Design',
        duration: '04:53',
        seqNo: 6,
        courseId: 6
    },
    {
        id: 17,
        'description': 'Client Authentication Service - Design and Implementation',
        duration: '09:14',
        seqNo: 7,
        courseId: 6
    },
    {
        id: 18,
        'description': 'The New Angular HTTP Client - Doing a POST Call To The Server',
        duration: '06:08',
        seqNo: 8,
        courseId: 6
    },
    {
        id: 19,
        'description': 'User Sign Up Server-Side Implementation in Express',
        duration: '08:50',
        seqNo: 9,
        courseId: 6
    },
    {
        id: 20,
        'description': 'Introduction To Cryptographic Hashes - A Running Demo',
        duration: '05:46',
        seqNo: 10,
        courseId: 6
    },
    {
        id: 21,
        'description': 'Some Interesting Properties Of Hashing Functions - Validating Passwords',
        duration: '06:31',
        seqNo: 11,
        courseId: 6
    },


    // PWA course

    {
        id: 22,
        'description': 'Course Kick-Off - Install Node, NPM, IDE And Service Workers Section Code',
        duration: '07:19',
        seqNo: 1,
        courseId: 7
    },
    {
        id: 23,
        'description': 'Service Workers In a Nutshell - Service Worker Registration',
        duration: '6:59',
        seqNo: 2,
        courseId: 7
    },
    {
        id: 24,
        'description': 'Service Workers Hello World - Lifecycle Part 1 and PWA Chrome Dev Tools',
        duration: '7:28',
        seqNo: 3,
        courseId: 7
    },
    {
        id: 25,
        'description': 'Service Workers and Application Versioning - Install & Activate Lifecycle Phases',
        duration: '10:17',
        seqNo: 4,
        courseId: 7
    },

    {
        id: 26,
        'description': 'Downloading The Offline Page - The Service Worker Installation Phase',
        duration: '09:50',
        seqNo: 5,
        courseId: 7
    },
    {
        id: 27,
        'description': 'Introduction to the Cache Storage PWA API',
        duration: '04:44',
        seqNo: 6,
        courseId: 7
    },
    {
        id: 28,
        'description': 'View Service Workers HTTP Interception Features In Action',
        duration: '06:07',
        seqNo: 7,
        courseId: 7
    },
    {
        id: 29,
        'description': 'Service Workers Error Handling - Serving The Offline Page',
        duration: '5:38',
        seqNo: 8,
        courseId: 7
    },

    // Serverless Angular with Firebase Course

    {
        id: 30,
        description: 'Development Environment Setup',
        duration: '5:38',
        seqNo: 1,
        courseId: 1
    },

    {
        id: 31,
        description: 'Introduction to the Firebase Ecosystem',
        duration: '5:12',
        seqNo: 2,
        courseId: 1
    },

    {
        id: 32,
        description: 'Importing Data into Firestore',
        duration: '4:07',
        seqNo: 3,
        courseId: 1
    },

    {
        id: 33,
        description: 'Firestore Documents in Detail',
        duration: '7:32',
        seqNo: 4,
        courseId: 1
    },

    {
        id: 34,
        description: 'Firestore Collections in Detail',
        duration: '6:28',
        seqNo: 5,
        courseId: 1
    },

    {
        id: 35,
        description: 'Firestore Unique Identifiers',
        duration: '4:38',
        seqNo: 6,
        courseId: 1
    },

    {
        id: 36,
        description: 'Querying Firestore Collections',
        duration: '7:54',
        seqNo: 7,
        courseId: 1
    },

    {
        id: 37,
        description: 'Firebase Security Rules In Detail',
        duration: '5:31',
        seqNo: 8,
        courseId: 1
    },

    {
        id: 38,
        description: 'Firebase Cloud Functions In Detail',
        duration: '8:19',
        seqNo: 9,
        courseId: 1
    },

    {
        id: 39,
        description: 'Firebase Storage In Detail',
        duration: '7:05',
        seqNo: 10,
        courseId: 1
    }
]




module.exports = {
    coursesData,
    lessonsData,
}










