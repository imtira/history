function converter(){
    var input = document.getElementById('input').value;
    output = input.replace(/ffi/g , "ﬃ").replace(/fi/g , "ﬁ").replace(/fl/g , "ﬂ").replace(/ffl/g , "ﬄ").replace(/ff/g , "ﬀ").replace(/aa/g , "ꜳ");
    document.getElementById('output').value = output;}