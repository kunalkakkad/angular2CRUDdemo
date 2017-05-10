namespace Category.Modal
{
    using System.Data.Entity;

    public partial class CategoryContext : DbContext
    {
        public CategoryContext()
            : base("name=CategoryContext")
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<SubCategory> SubCategories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .HasMany(e => e.SubCategories)
                .WithRequired(e => e.Category)
                .WillCascadeOnDelete(false);
        }
    }
}
