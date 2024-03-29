using System;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.EntityTypeConfiguration", Version = "1.0")]

namespace PetClinic.Infrastructure.Persistence.Configurations
{
    public class PetConfiguration : IEntityTypeConfiguration<Pet>
    {
        public void Configure(EntityTypeBuilder<Pet> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(x => x.BirthDate)
                .IsRequired();

            builder.HasOne(x => x.PetType)
                .WithMany()
                .HasForeignKey(x => x.PetTypeId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.OwnsMany(x => x.Visits, ConfigureVisits);
        }

        public void ConfigureVisits(OwnedNavigationBuilder<Pet, Visit> builder)
        {
            builder.WithOwner(x => x.Pet)
                .HasForeignKey(x => x.PetId);

            builder.HasKey(x => x.Id);

            builder.Property(x => x.VisitDate)
                .IsRequired();

            builder.Property(x => x.Description)
                .IsRequired();
        }
    }
}