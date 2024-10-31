exports.generateSearchQuery = (keywords) => {
    return {
        $text: {
            $search: keywords.join(" "),
        },
    };
};
