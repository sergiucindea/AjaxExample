namespace NETCore.Models
{
    public class AjaxExampleModel
    {
       public Integers? Integers { get; set; }
       public StringInput? StringInput { get; set; }
       
    }

    public class Integers
    {
        public int Num1 { get; set; }
        public int Num2 { get; set; }
    }

    public class StringInput
    {
        public string? Value1 { get; set; }
        public string? Value2 { get; set; }
    }

    public class ArrayList
    {
        public string[]? Array { get; set; }
    }

    public enum SelectDoubleInputOptions
    {
        Concatenate,
        SumInt,
        SumFloat,
        SumDouble
    }
}
