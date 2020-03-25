$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL is definded', function() {
            allFeeds.forEach(feed => 
                expect(feed).toBeDefined()
            )
        });

        it('URL has name', function() {
            allFeeds.forEach(feed => 
                expect(feed.name).toBeDefined()
            );

            allFeeds.forEach(feed => 
                expect(feed.name.length).not.toBe(0)
            )
        });

    });

    describe('The menu', function() {
        const body = document.querySelector("#body");

        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true)
        });

         it('changes visibility', function() {
            $('.menu-icon-link').click()
            expect(body.classList.contains('menu-hidden')).toBe(false)

            $('.menu-icon-link').click()
            expect(body.classList.contains('menu-hidden')).toBe(true)
        });
    });

    describe('Initial Entires', function () {
        beforeEach(function(done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('at least one entry is there', function (done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done()
        });
    });

    describe('New Feed Selection', function() {
        let title1 = '';
        let title2 = '';

        beforeEach(function(done) {
            loadFeed(0, function() {
                title1 = $('.header-title').text();
                loadFeed(1, function () {
                    title2 = $('.header-title').text();
                    done()
                });
            });
        });

        it('actually changed content', function (done) {
            expect(title1).not.toBe(title2);
            done()
        });
    });
}());
