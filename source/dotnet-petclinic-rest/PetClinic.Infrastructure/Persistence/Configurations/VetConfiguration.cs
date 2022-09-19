using System;
using Intent.RoslynWeaver.Attributes;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using PetClinic.Domain.Entities;

[assembly: DefaultIntentManaged(Mode.Fully)]
[assembly: IntentTemplate("Intent.EntityFrameworkCore.EntityTypeConfiguration", Version = "1.0")]

namespace PetClinic.Infrastructure.Persistence.Configurations
{
    public class VetConfiguration : IEntityTypeConfiguration<Vet>
    {
        public void Configure(EntityTypeBuilder<Vet> builder)
        {
            builder.HasKey(x => x.Id);

            builder.Property(x => x.FirstName)
                .IsRequired()
                .HasMaxLength(30);

            builder.Property(x => x.LastName)
                .IsRequired()
                .HasMaxLength(30);


            builder.HasMany(x => x.Specialties)
                .WithMany("Vets")
                .UsingEntity(x => x.ToTable("VetSpecialties"));

        }
    }
}